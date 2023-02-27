import React from "react";

function Menu({ title, items }) {
  return (
    <section>
      <nav className="grid gap-y-4">
        <h6 className="text-xl text-purple-700">{title}</h6>
        <nav>
          <ul className="grid gap-y-2">
            {items.map((item, key) => (
              <li key={key}>
                <a className="text-sm hover:text-purple-700" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
}

export default Menu;
