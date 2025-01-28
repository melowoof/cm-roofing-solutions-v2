import { GenericButton } from "./generic_button";
import { services } from "../lib/services";
import { ChevronDown } from "lucide-react";

export default function Form() {
  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const form = event.currentTarget.closest("form");
    if (form) {
      form.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  }

  return (
    <div className="h-fit w-full flex justify-center items-center">
      <div className="w-full flex flex-col gap-4">
        <form action="" className="flex flex-col gap-5 ">
          <input
            className="border-2 rounded-md p-3"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="border-2 rounded-md p-3"
            type="email"
            placeholder="Email"
            required
          />
          <div className="w-full relative">
            <select
              className="border-2 rounded-md px-3 h-12 appearance-none w-full bg-gray-100"
              name="Service"
              id=""
            >
              <option value="general-inquiry">General Inquiry</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute top-0 right-0 h-full mr-2 pointer-events-none" />
          </div>
          <textarea
            className="border-2 rounded-md p-3 min-h-40"
            name="Message"
            id="message"
            placeholder="Message"
          ></textarea>
          <div className="flex justify-end">
            <GenericButton onclick={handleSubmit}>Get a Quote</GenericButton>
          </div>
        </form>
      </div>
    </div>
  );
}
