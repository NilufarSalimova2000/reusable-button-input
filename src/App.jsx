import React from "react"
import { Modal } from "./components/modal/modal";
import useToggleTheme from "./hooks/useTheme";
import { DarkIcon } from "./assets/dark-icon"
import { Button } from "./components/button";
import { Input } from "./components/input";

function App() {
  const [state, setState] = React.useState(false);
  const [theme, setTheme] = useToggleTheme();

  return (
    <>
      <div className="container">
        <div className="pt-[50px]">
          <button className="text-textColor flex items-center gap-[5px]" onClick={() => setTheme(theme)}><DarkIcon />Dark Mode</button>
        </div>
        <div className="py-[30px]">
          <Modal show={state} onClose={() => setState(false)}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus culpa fugit quaerat facilis assumenda, eos distinctio nihil eaque labore dolorem perspiciatis atque natus libero, minus quasi cum, ut non.</p>
          </Modal>
          <button className="text-pink-400" onClick={() => setState(true)}>Open modal</button>
        </div>
        <p className="text-textColor pb-[50px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate tempore vel praesentium voluptas impedit libero id est, quasi error cum sapiente deserunt in quidem ex pariatur doloribus incidunt sint quae?</p>
        <div className="flex gap-[20px] mb-[30px]">
          <Button size={"sm"} variants={"primary"}>Primary</Button>
          <Button size={"sm"} variants={"secondary"}>Secondary</Button>
          <Button size={"sm"} variants={"border"}>WithBorder</Button>
        </div>
        <div className="flex gap-[20px] mb-[30px]">
          <Button size={"lg"} variants={"primary"}>Primary</Button>
          <Button size={"lg"} variants={"secondary"}>Secondary</Button>
          <Button size={"lg"} variants={"border"}>WithBorder</Button>
        </div>
        <div className="w-[500px] flex flex-col gap-[20px] items-start">
            <Input size={"sm"} variants={"primary"} placeholder="Primary" />
            <Input size={"lg"} variants={"secondary"} placeholder="Secondary" />
        </div>
      </div>
    </>
  )
}

export default App
