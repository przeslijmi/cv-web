import SubLayout from '@core/layouts/SubLayout';
import { Brain, DatabaseZap, GitCommitVertical, Layers, Smartphone, TestTube } from 'lucide-react';
import Tech from '@outcome/components/Tech';

export default function TechStackPage() {

  return (
    <SubLayout title="Tech Stack">

      <div className="grid md:grid-cols-2 gap-8">

        <Tech type="other" name="AI Tools" icon={Brain}>
          GitHub Copilot, ChatGPT, Claude, Grok - leveraging AI for rapid development while maintaining code quality through experience.
        </Tech>

        <Tech type="back" name="PHP">
          20+ years of experience building robust backend systems. Deep understanding of OOP, design patterns, and performance optimization.
        </Tech>

        <Tech type="back" name="Laravel" icon={Layers}>
          Familiar with Laravel ecosystem - Eloquent ORM, queues, events, broadcasting, and building scalable APIs.
        </Tech>

        <Tech type="front" name="Netlify">
          Skilled in deploying and managing modern web applications using Netlify — leveraging its CI/CD, edge functions, and seamless integration with frontend frameworks.
        </Tech>

        <Tech type="other" name="Github & Gitlab" icon={GitCommitVertical}>
          Proficient with GitHub and GitLab — streamlined CI/CD, code reviews, and collaborative version control for modern teams.
        </Tech>

        <Tech type="front" name="Vue.js">
          Building reactive, component-based UIs with Vue 3, Composition API, Pinia for state management.
        </Tech>

        <Tech type="front" name="React">
          Modern React with hooks, context API, and popular libraries. Building performant, maintainable SPAs.
        </Tech>

        <Tech type="other" name="JIRA">
          Experienced with JIRA — agile workflows, sprint planning, and issue tracking for transparent, efficient project delivery.
        </Tech>

        <Tech type="back" name="DDD">
          Building resilient architectures with Domain-Driven Design — from bounded contexts to event-driven communication.
        </Tech>

        <Tech type="mobile" name="React Native" icon={Smartphone}>
          Cross-platform mobile development for iOS and Android with native performance.
        </Tech>

        <Tech type="front" name="Tailwind">
          Crafting elegant, responsive UIs with Tailwind CSS — utility-first design for consistency, speed, and precision.
        </Tech>

        <Tech type="back" name="Databases" icon={DatabaseZap}>
          BuildProficient with relational databases including MySQL, PostgreSQL, and MS SQL, as well as cloud solutions like Supabase for scalable, real-time data-driven apps.
        </Tech>

        <Tech type="front" name="TypeScript">
          Type-safe development for catching errors early and improving code maintainability.
        </Tech>

        <Tech type="back" name="REST API">
          Skilled in designing and implementing RESTful APIs — ensuring clean architecture, proper versioning, and secure data exchange between clients and servers.
        </Tech>

        <Tech type="front" name="Node.js">
          Experienced with Node.js — building scalable backend services, managing asynchronous operations, and optimizing APIs for high performance.
        </Tech>

        <Tech type="other" name="Testing" icon={TestTube}>
          Vitest, PHPUnit, Playwright - comprehensive testing strategies for reliable software.
        </Tech>

      </div>

    </SubLayout>
  );
}
