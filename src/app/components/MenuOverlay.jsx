import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  links.map((i) =>{
    console.log(i.path, i.title)
  })
  return (
    <ul className="flex flex-col items-center py-4 ">
      {links.map((link, index) => (
        
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay; 
