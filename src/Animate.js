import gsap from "gsap"
import { useGSAP } from "@gsap/react"
export const animate= ()=>{
    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from([".heading1", ".heading2", ".heading3", ".lines", ".button"], {
            y: -80,
            opacity: 0,
            rotation: -1,
            ease: "power3.out",
            delay: 0.3,
            stagger: 0.2,
            duration: 1.4,
        })
    })
}
export const navAnimate = ()=>{
    useGSAP(()=>{
        let tl = gsap.timeline();
        tl.from(".logo, .link , .theme, .profile, .menu" ,{
          y:-20,
          delay: 0.3,
          opacity : 0,
          stagger : 0.1,
          duration: 0.8
        })
      })
    
}