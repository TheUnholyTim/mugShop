import IconMug from " https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mug.tsx " ;

type Props = {
    active : string;
  };

const menus = [
   {name : "Home", href: "/"},
   {name : "Mugs", href: "/Mugs"},
   {name: "About", href: "/About"},
];

export default function Header( { active } : Props ) {

  return (
     <div class="bg-transparent w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
       <ul class="flex items-left gap-2">
         <li>
             <IconMug aria-hidden="true" />
          </li>

        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"${tw`text(white-500 uppercase)`} hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
