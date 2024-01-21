import {useCallback, useEffect, useState} from "react";
import {Particles as TSParticles, initParticlesEngine} from "@tsparticles/react"; // Rename 'Particles' to 'TSParticles'
import {loadSlim} from "@tsparticles/slim";

export default function ParticlesComponent() {
  // Rename function to avoid naming conflict
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <TSParticles // Use the renamed 'TSParticles' component
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            autoPlay: true,
            // fullScreen: false,
            background: {
              // color: {
              //   value: "#",
              // },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  distance: 400,
                },
              },
            },
            particles: {
              color: {
                value: "#4169E1",
              },
              links: {
                color: "#4169E1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {min: 1, max: 5},
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
