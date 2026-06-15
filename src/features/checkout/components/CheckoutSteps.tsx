import { Fragment } from 'react'
import { checkoutSteps } from '../data/checkoutData'

export function CheckoutSteps({ activeStep }: { activeStep: number }) {
  return (
    <nav className="mb-stack-lg">
      <ol className="flex items-center space-x-4">
        {checkoutSteps.map((step, index) => (
          <Fragment key={step.id}>
            {index > 0 ? <li className="w-8 h-[1px] bg-outline-variant" aria-hidden /> : null}
            <li className={`flex items-center gap-2 ${step.id === activeStep ? '' : 'opacity-40'}`}>
              <span
                className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                  step.id === activeStep ? 'border-primary' : 'border-outline'
                }`}
              >
                {step.id}
              </span>
              <span className={`font-label-caps text-label-caps ${step.id === activeStep ? 'text-primary' : ''}`}>
                {step.label}
              </span>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  )
}
