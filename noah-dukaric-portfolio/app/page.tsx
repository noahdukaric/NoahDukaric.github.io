import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProfileSection } from "@/components/profile-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
