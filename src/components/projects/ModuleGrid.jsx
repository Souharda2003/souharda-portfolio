import ModuleCard from "./ModuleCard";

function ModuleGrid({ modules }) {
  return (
    <div className="module-grid">
      {modules.map((module, index) => (
        <ModuleCard
          key={index}
          module={module}
        />
      ))}
    </div>
  );
}

export default ModuleGrid;