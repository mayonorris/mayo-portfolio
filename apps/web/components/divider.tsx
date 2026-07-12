type DividerProps = {
  className?: string;
};

export function Divider({ className = "" }: DividerProps) {
  return <hr className={["divider", className].join(" ")} />;
}
