import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Hello world! 🌍</h1>

      <div className={styles.about}>
        <div className={styles.aboutImage}>
          <Image
            src="/headshot.jpg"
            alt="A headshot of Rucha Damle"
            width={320}
            height={320}
          />
        </div>

        <div className={styles.aboutText}>
          <p>
            I am a student in <strong>Cal Poly's class of 2027</strong>, pursuing a major in{" "}
            <strong>Computer Science</strong>. I have been studying computer science ever
            since my time at <em>Ohlone College</em>, where I took my first foray into the
            field and <em>fell in love</em>. I am comfortable with coding in{" "}
            <strong>Python</strong>, <strong>C++</strong>, <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, and <strong>JavaScript</strong>, and I am always{" "}
            <em>eager to learn more</em>.
          </p>

          <p>
            Outside of academics, I love <em>tidepooling</em> and looking at marine life,{" "}
            <em>birdwatching</em>, and <em>feeding the stray cats</em> in my neighborhood.
          </p>
        </div>
      </div>
    </main>
  );
}
