export const SvgDashboardIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="12"
    className={props.className}
    viewBox="0 0 20 12"
    data-testid="dashboard-icon" // atributo para os testes
  >
    <path
      d="m14.799 1.594 1.386 1.33-4.697 4.506L8.32 4.392a.99.99 0 0 0-1.358 0l-5.775 5.55a.893.893 0 0 0 0 1.301c.375.36.982.36 1.357 0L7.637 6.35l3.167 3.038c.376.36.982.36 1.357 0l5.381-5.152 1.387 1.33c.298.286.818.083.818-.324v-3.97c.01-.259-.202-.462-.472-.462h-4.13c-.433 0-.644.499-.346.785"
    ></path>
  </svg>
);