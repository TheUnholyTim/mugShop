import IconMug from " https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mug.tsx " ;

type Props = {
    active : string;
  };

const menus = [
 {name : "Home", href: "/"},
 {name : "Mugs", href: "/Mugs"},
];

export default function Header( { active } : Props ) {

  return (
     <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
       <div class="flex items-center flex-1">
        <IconMug aria-hidden="true" />
          <div class="text-2xl ml-1 font-bold">
           to have at all times 
         </div>
      </div>
      <ul class="flex items-left gap-2">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
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
