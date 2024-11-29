import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropDown({ title, right, filterList, hideIcon }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold text-gray-900">
          {title}
          {hideIcon ? (
            ""
          ) : (
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
          )}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={`absolute ${
          right ? "left-0" : "right-0"
        }  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
      >
        <div className="py-1">
          {filterList.map((item, index) => (
            <MenuItem key={index}>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                {item}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
