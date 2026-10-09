import { Brand } from "./Header";

export default function Footer() {
  return <footer className="site-footer section-shell"><Brand /><p>© {new Date().getFullYear()} Neon Moon. All rights reserved.</p><a className="back-top" href="#home">BACK TO THE MOON <span aria-hidden="true">↑</span></a></footer>;
}
