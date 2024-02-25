const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-8 bg-gray-800 flex justify-between text-white">
      <div className="">CodePals</div>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Contact</li>
        <li>Profile</li>
      </ul>
    </div>
    )
}

export default Header