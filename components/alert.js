import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
              <a
                href="https://www.instagram.com/isla.supply/?igsh=d2tkM2x2OWEwbmdl"
                className="underline hover:text-orange duration-200 transition-colors"
              >
                ISLA Supply
              </a>

        </div>
      </Container>
    </div>
  );
}
