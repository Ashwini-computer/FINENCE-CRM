import { cn } from "@/lib/utils";

export function TypographyH1({ children, className }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH2BlueColor({ children, className }) {
  return (
    <h2
      className={cn(
        "sm:text-2xl text-xl text-[#2A4759] tracking-tight mt-4 font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }) {
  return (
    <h3
      className={cn(
        "scroll-m-20 sm:text-2xl text-lg font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }) {
  return (
    <h4
      className={cn(
        "scroll-m-20 sm:text-md text-sm font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyH5({ children, className }) {
  return (
    <h4
      className={cn(
        "scroll-m-20 sm:text-sm text-sm font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyH4BlueColor({ children, className }) {
  return (
    <h2
      className={cn(
        "sm:text-xl text-md text-[#2A4759] tracking-tight mt-8 font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyP({ children, className }) {
  return <p className={cn("leading-7", className)}>{children}</p>;
}

export function TypographyPBlueColor({ children, className }) {
  return (
    <p className={cn("leading-7 opacity-80 font-base my-4 text-sm", className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className }) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      "{children}"
    </blockquote>
  );
}

export function TypographyList({ items, className }) {
  return (
    <ul className={cn("list-none grid gap-2", className)}>
      {items?.map((item, groupIndex) =>
        item?.features?.map((feature, featureIndex) => (
          <li
            key={`${groupIndex}-${featureIndex}`}
            className="flex items-start gap-2 text-xs"
          >
            {item?.icon}
            <span>{feature}</span>
          </li>
        ))
      )}
    </ul>
  );
}

export function TypographyList2({ items, className }) {
  return (
    <ul
      className={cn(
        "my-6 sm:ml-8 ml-6 list-disc text-gray-800 [&>li]:mt-2 text-sm",
        className
      )}
    >
      {items?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function BoldList({ items, className }) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-3 text-sm", className)}>
      {items?.map((item, index) => (
        <li key={index}>
          <span className="font-semibold">
            {item?.title ? `${item.title} : ` : ""}
          </span>
          <span className="text-gray-800">{item?.value}</span>
        </li>
      ))}
    </ul>
  );
}

export function TypographyLead({ children, className }) {
  return (
    <p
      className={cn(
        "text-md text-accent font-medium tracking-normal",
        className
      )}
    >
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }) {
  return (
    <div className={cn("text-md font-semibold", className)}>{children}</div>
  );
}

export function TypographySmall({ children, className }) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}

export function HeadSkipper({ children, className }) {
  return (
    <div className="flex items-center gap-2 sm:gap-4 mb-6">
      <h2
        className={cn(
          "text-primary font-bold sm:tracking-wide sm:text-sm text-[10px] uppercase",
          className
        )}
      >
        {children}
      </h2>
      <div className="sm:w-22 w-10 h-px bg-blue-700"></div>
    </div>
  );
}

export function HighLighter({ rightText, leftText, className, highLighter }) {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <h3
        className={cn(
          "text-lg text-blue-900 font-bold tracking-normal",
          className
        )}
      >
        {rightText} <span className="text-accent">{highLighter}</span>{" "}
        {leftText}
      </h3>
      <div className="w-14 h-0.5 bg-accent"></div>
    </div>
  );
}

export function Headline({ children, className }) {
  return (
    <h3
      className={cn(
        "uppercase text-xl sm:text-3xl font-bold tracking-normal text-primary",
        className
      )}
    >
      {children}
    </h3>
  );
}
