'use client';

import { processSteps } from '@/data/freelance';
import { MessageSquare, FileText, Code, TestTube, Rocket } from 'lucide-react';

const phaseIcons = [MessageSquare, FileText, Code, TestTube, Rocket];

export default function FLProcess() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            프로젝트 진행 프로세스
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            투명한 진행 과정으로 안심하고 프로젝트를 맡겨주세요
          </p>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, index) => {
            const IconComponent = phaseIcons[index];
            return (
              <div
                key={step.step}
                className="relative flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold mb-2">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[var(--color-border)]" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent size={20} className="text-[var(--color-primary)]" />
                      <h3 className="text-lg font-semibold">{step.phase}</h3>
                      <span className="text-sm text-[var(--color-muted-foreground)] ml-auto">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">산출물</h4>
                        <ul className="space-y-1">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="text-xs text-[var(--color-muted-foreground)] flex items-start gap-2">
                              <span className="text-[var(--color-success)]">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">소통 방식</h4>
                        <p className="text-xs text-[var(--color-muted-foreground)]">
                          {step.communication}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}