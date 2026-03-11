import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const team = [
  {
    name: "Femi Abiola",
    role: "Role 1",
    img: "https://picsum.photos/600/400?random=1",
  },
  {
    name: "Patrick Okurisiki",
    role: "Role 2",
    img: "https://picsum.photos/600/400?random=2",
  },
  {
    name: "John Smith",
    role: "Role 3",
    img: "https://picsum.photos/600/400?random=3",
  },
  {
    name: "Chinua Achebe",
    role: "Role 4",
    img: "https://picsum.photos/600/400?random=4",
  },
  {
    name: "Etim Iyang",
    role: "Role 5",
    img: "https://picsum.photos/600/400?random=5",
  },
];

export default function TeamSection() {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".team-card");

      const loop = gsap.timeline({
        repeat: -1,
        paused: false,
        defaults: { ease: "none" },
      });

      const cardWidth = 340;

      loop.to(track.current, {
        x: `-=${cardWidth}`,
        duration: 8,
        modifiers: {
          x: gsap.utils.unitize(
            (x) => parseFloat(x) % (cardWidth * team.length),
          ),
        },
      });

      Draggable.create(track.current, {
        type: "x",
        inertia: true,
        onDrag: updateScale,
        onThrowUpdate: updateScale,
      });

      function updateScale() {
        cards.forEach((card: any) => {
          const rect = card.getBoundingClientRect();
          const center = window.innerWidth / 2;
          const distance = Math.abs(center - (rect.left + rect.width / 2));

          const scale = gsap.utils.clamp(0.8, 1.1, 1 - distance / 1200);

          gsap.to(card, {
            scale,
            duration: 0.3,
          });
        });
      }

      updateScale();

      gsap.from(container.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 overflow-hidden" ref={container}>
      <div className="max-w-7xl mx-auto px-4">
       
        <h1 className="text-center pb-4 text-5xl font-bold text-[#30447F]"> Meet Our Team</h1>

        <div className="overflow-hidden">
          <div
            ref={track}
            className="flex gap-4 cursor-grab active:cursor-grabbing"
          >
            {[...team, ...team].map((member, i) => (
              <div
                key={i}
                className="team-card min-w-[320px] bg-white rounded-xl shadow-md"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="aspect-video w-full object-cover rounded-t-xl"
                />

                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>

                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>

                  <span className="text-[#0072b1]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
