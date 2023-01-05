const AddFlight = () => {

    return (
        <div className="w-full mt-6">

            <form className="w-full bg-gray-900 p-8 rounded-lg">
                <label className="block uppercase text-center tracking-wide text-zinc-100 text-2xl font-bold mb-6" htmlFor="grid-zip">
                    Enter Flight data
                </label>
                <div className="flex flex-wrap justify-around mb-6">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
                                Source Airport Code
                            </label>
                            <select required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                                <option selected disabled>Source code...</option>
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
                                Destination Airport Code
                            </label>
                            <select required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                                <option selected disabled>Destination code...</option>
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center text-center -mx-3 mb-6">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xl font-bold" htmlFor="grid-zip">
                                Bagdogra Airport
                            </label>
                            <p className="text-zinc-100 text-xs italic">Bagdogra, West Bengal</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-lg font-bold" htmlFor="grid-zip">
                                1820
                            </label>
                            <p className="text-zinc-100 text-xs italic">KM</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xl font-bold" htmlFor="grid-zip">
                                Bagdogra Airport
                            </label>
                            <p className="text-zinc-100 text-xs italic">Bagdogra, West Bengal</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-around mb-6">

                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
                                Departure Time
                            </label>
                            <div className="rounded-md shadow-sm">
                                <input type="time" required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
                                Arrival Time
                            </label>
                            <div className="rounded-md shadow-sm">
                                <input type="time" required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
                <center className="justify-center align-center">
                    <span className="block rounded-md shadow-sm">
                        <button type="submit" className="w-40 tracking-widest uppercase flex justify-center px-4 py-2.5 text-sm font-bold text-zinc-100 hover:text-white bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Add</button>
                    </span>
                </center>
            </form >
        </div >
    )
}

export default AddFlight;


// import * as React from 'react';

// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// export default function BasicTimePicker() {
//   const [value, setValue] = React.useState(null);

//   return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <TimePicker
    //     label="Basic example"
    //     value={value}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //     renderInput={(params) => <TextField {...params} />}
    //   />
    // </LocalizationProvider>
//   );
// }