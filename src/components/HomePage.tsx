import UpdateLog from "./UpdateLog";

const updateLog = [{ date: "2024.04.10", content: "Add IP address converter" }];

const planedLog = [
  { date: "2024", content: "Checksum calculation tool" },
  { date: "2024", content: "Longest Prefix Match Algorithm tool" },
];

export default function HomePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to Net Fun Tools
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Net Fun is not fun, so I made something just for fun
        </p>
      </div>
      <div className="sm:my-28 xl:flex gap-8">
        <UpdateLog title="Update Log" updateLog={updateLog}></UpdateLog>
        <UpdateLog title="Planed" updateLog={planedLog}></UpdateLog>
      </div>
    </section>
  );
}
