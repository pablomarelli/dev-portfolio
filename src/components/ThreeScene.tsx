import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeSceneProps {
  className?: string
}

function ThreeScene({ className = '' }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    particles: THREE.Points
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    // Renderer with transparency
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0) // Transparent background
    container.appendChild(renderer.domElement)

    // Create particle system
    const particleCount = 800
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Spread particles in a large cube
      positions[i3] = (Math.random() - 0.5) * 100
      positions[i3 + 1] = (Math.random() - 0.5) * 100
      positions[i3 + 2] = (Math.random() - 0.5) * 100

      // Random slow velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Terminal green color for particles
    const material = new THREE.PointsMaterial({
      size: 0.8,
      color: 0x22c55e, // Terminal green
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Store velocities for animation
    const particleVelocities = velocities

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let animationId: number = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Update particle positions
      const positions = geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3] += particleVelocities[i3]
        positions[i3 + 1] += particleVelocities[i3 + 1]
        positions[i3 + 2] += particleVelocities[i3 + 2]

        // Wrap around boundaries
        if (positions[i3] > 50) positions[i3] = -50
        if (positions[i3] < -50) positions[i3] = 50
        if (positions[i3 + 1] > 50) positions[i3 + 1] = -50
        if (positions[i3 + 1] < -50) positions[i3 + 1] = 50
        if (positions[i3 + 2] > 50) positions[i3 + 2] = -50
        if (positions[i3 + 2] < -50) positions[i3 + 2] = 50
      }
      geometry.attributes.position.needsUpdate = true

      // Subtle camera movement based on mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.02
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      // Slow rotation
      particles.rotation.y += 0.0003
      particles.rotation.x += 0.0001

      renderer.render(scene, camera)
    }
    animate()

    // Store refs for cleanup and theme updates
    sceneRef.current = { scene, camera, renderer, particles, animationId }

    // Handle resize
    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  // Update particle color based on theme
  useEffect(() => {
    const updateTheme = () => {
      if (sceneRef.current) {
        const isDark = document.documentElement.classList.contains('dark')
        const material = sceneRef.current.particles.material as THREE.PointsMaterial
        material.opacity = isDark ? 0.6 : 0.4
      }
    }

    // Initial update
    updateTheme()

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 -z-10 ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default ThreeScene
