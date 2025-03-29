import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Navbar() {
  const connectGoogle = () => {
    // Logic to connect to Google account
    console.log("Connecting to Google account...");
  };
  return (
    <nav className="border-b p-4 w-full">
      <div className="flex items-center w-full container mx-auto justify-between">
        <Link to="/" className="flex items-center gap-1">
          <img
            src="/icons8-bee-48.png"
            alt="bee logo"
            className="size-8 object-contain"
          />
          <h2 className="text-xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            StoryBee
          </h2>
        </Link>

        <ul className="flex items-center gap-6 text-sm fon">
          <li className="text-muted-foreground font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-muted-foreground font-medium">
            <Link to="/videos">Videos</Link>
          </li>
          <li className="text-muted-foreground font-medium">
            <Link to="#">Contact</Link>
          </li>
        </ul>

        <Button variant="outline" onClick={() => connectGoogle()}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            className="size-4"
          />
          Signup with Google
        </Button>
      </div>
    </nav>
  );
}
