// File: src/components/HomepageFeatures/index.js
import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* === Your About section starts here === */}
        <div className="row">
          <div className="col col--12">
            <h1>About FormuLearn</h1>
            <section id="about-us">
            <p>
              At <strong>FormuLearn</strong>, we make mastering mathematics intuitive and engaging. Our platform transforms complex concepts into clear, interactive content, so students can build confidence and achieve success—one formula at a time.
            </p>

            <p>
              Traditional STEM education often follows a rigid, linear path: each lesson builds strictly on the last - like building a brick wall. But missing even one “brick” can create gaps in a student's understanding that slow progress. FormuLearn breaks down mathematics into bite-sized modules with dynamic, context-aware overlays. If you skip a class or need a quick refresher, every definition, proof, and example is just a click away—so you never get left behind.
            </p>

            <p>
              At <strong>FormuLearn</strong>, we believe in open collaboration to make STEM subjects accessible to everyone. Our tools are designed with transparency in mind - and many of the tools we build are intended to be open source, allowing educators, developers, and engineers to learn from, contribute to, and extend our work.
            </p>

            <p>
              We're gearing up to release our first open source module, and it's only the beginning. By sharing much of our code and resources, we aim to foster a community-driven platform where ideas flow freely and improvements are made together.
            </p>

            <p>
              Want to see what's coming next? Head over to our main site to explore our vision, sign up for early access, and stay updated on new open source releases.
            </p>

            <p>
              <a href="https://formulearn.org" target="_blank">Discover FormuLearn →</a>
            </p>
          </section>
          </div>
        </div>
      </div>
    </section>
  );
}