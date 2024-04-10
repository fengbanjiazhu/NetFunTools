import { FaGithub } from "react-icons/fa";

function SiteFooter() {
  return (
    <div className="w-full border-t bg-background">
      <div className="container flex h-12 items-center space-x-4 justify-around sm:space-x-0">
        <p className="text-muted-foreground">Jeffrey R. &copy; {new Date().getFullYear()}</p>
        <div id="middle_heading">
          <a href="https://github.com/fengbanjiazhu" target="_blank">
            <FaGithub />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;
