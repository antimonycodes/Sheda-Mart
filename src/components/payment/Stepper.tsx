interface StepperProps {
  currentStep: number;
  steps: {
    id: number;
    name: string;
  }[];
}

export function Stepper({
  currentStep = 1,
  steps = [
    { id: 1, name: "Shipping" },
    { id: 2, name: "Payment" },
    { id: 3, name: "Review" },
  ],
}: StepperProps) {
  return (
    <div className=" flex-1 w-full ">
      <div className="relative flex justify-between items-center">
        {/* Progress Line */}
        <div className="absolute top-3 left-0 right-0 h-[2px] -translate-y-1/2 bg-gray-200">
          <div
            className="h-full bg-gray-900 transition-all duration-300"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative flex flex-col  items-center gap-3 min-w-[24px]"
          >
            <div
              className={`rounded-full border-2 transition-all duration-300 transform
                ${
                  step.id === currentStep
                    ? "w-6 h-6  bg-[#5D5A5B] scale-300"
                    : step.id < currentStep
                    ? "w-[10px] h-[10px]  bg-[#5D5A5B]"
                    : "w-4 h-4  bg-[#5D5A5B]"
                }`}
            />
            <span className=" absolute  -bottom-6 text-xs font-medium text-greyBody">
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
