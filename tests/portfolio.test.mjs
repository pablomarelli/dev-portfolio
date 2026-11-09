import assert from 'node:assert/strict'
import test from 'node:test'
import { localeContent } from '../src/data/portfolio.ts'

test('language switching preserves contact and project destinations', () => {
  const { en, es } = localeContent
  assert.equal(es.portfolio.email, en.portfolio.email)
  assert.equal(es.portfolio.sourceRepository, en.portfolio.sourceRepository)
  assert.deepEqual(es.portfolio.projects.map(project => project.url), en.portfolio.projects.map(project => project.url))
  assert.deepEqual(es.portfolio.socialLinks.map(link => link.url), en.portfolio.socialLinks.map(link => link.url))
})

for (const [locale, { portfolio }] of Object.entries(localeContent)) {
  test(`${locale} publishes valid contact and external destinations`, () => {
    assert.match(portfolio.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    assert.ok(portfolio.projects.length > 0)
    const urls = [portfolio.sourceRepository, ...portfolio.projects.map(project => project.url), ...portfolio.socialLinks.map(link => link.url)]
    for (const value of urls) {
      const url = new URL(value)
      if (url.protocol === 'mailto:') {
        assert.equal(url.pathname, portfolio.email)
        continue
      }
      assert.equal(url.protocol, 'https:')
      assert.ok(url.hostname)
    }
    assert.equal(new Set(portfolio.projects.map(project => project.url)).size, portfolio.projects.length)
  })
}
