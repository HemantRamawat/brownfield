import Icon from "../adminComponents/Icon";

import IconButton from "../adminComponents/IconButton";

import NameCard from "../adminComponents/NameCard";

import Graph from "../adminComponents/Graph";

import FlightIcon from "@mui/icons-material/Flight";

import DashboardIcon from "@mui/icons-material/Dashboard";

import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

import AdminHeader from "../adminComponents/AdminHeader";

import FlightTable from "./FlightTable";

import { useEffect, useState } from "react";

import AddFlight from "./AddFlight";
import { GetAllFlights } from "../../../redux/admin/adminActions";

import {
  getAllAiriports,
  getAllFlights,
  getByAdminSearch,
  postFlightData,
  postUpdateFlightStatus,
  putUpdateFlightData,
} from "../../../api/FlightManagementService";

import axios from "axios";
import { useDispatch, useSelector, useStore } from "react-redux";
import { toast } from "react-toastify";

const FlightManagement = () => {
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const [add, setAdd] = useState(false);

  const [flights, setFlights] = useState([]);

  const [airPorts, setAirPorts] = useState(useSelector((state) => state.admin.airports));
  // console.log(airPorts)

  const [clear, setClear] = useState(false);

  // const flightState = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    // alert("onecs")
    getAllFlights().then((res) => {
      if (res.status === 200) {
        setFlights(res.data)
        // setFlights(res.data.sort(({ flightId: a }, { flightId: b }) => a - b));
        // console.log(res.data)
        dispatch(
          // GetAllFlights(
          //   res.data.sort(({ flightId: a }, { flightId: b }) => a - b)
          // )
          GetAllFlights(res.data)
        );
        setTasksCompleted(res.data.length);
      } else {
        console.log("could not get data");
      }
    });
  }, [clear, add]);

  const adminSearch = (obj) => {
    getByAdminSearch(obj).then((res) => {
      setFlights(res.data)
      // setFlights(res.data.sort(({ flightId: a }, { flightId: b }) => a - b))
      // dispatch(GetAllFlights(res.data.sort(({ flightId: a }, { flightId: b }) => a - b)))
      // setClear(!clear)
    });
  };

  const insertFlightData = (obj) => {
    // let tmp;
    postFlightData(obj).then((res) => {
      setAdd(false);
      // console.log(res.data.flightId)
      toast.success(`Flight with ID ${res.data.flightId} added successfully`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  const updateFlightData = (id, obj) => {
    putUpdateFlightData(id, obj).then((res) => {
      setClear(!clear)
      // console.log(res.data)
    });
  };

  const toggleFlightStatus = (id) => {
    postUpdateFlightStatus(id).then((res) => {
      toast.success(`FlightId ${id} Updated Successfully`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setClear(!clear)
      // console.log(id, res.data)
    })
  }

  const employeeData = [
    {
      id: 1,

      name: "Flights",

      position: "Total Airports",

      transactions: tasksCompleted,

      rise: true,

      tasksCompleted: useStore().getState().admin.airports.length,

      imgId: <FlightIcon />,
    },
  ];

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>

      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <AdminHeader />

        {employeeData.map(
          ({
            id,

            name,

            position,

            transactions,

            rise,

            tasksCompleted,

            imgId,
          }) => (
            <NameCard
              key={id}
              id={id}
              name={name}
              position={position}
              transactionAmount={transactions}
              rise={rise}
              tasksCompleted={tasksCompleted}
              imgId={imgId}
            />
          )
        )}

        <div className="mt-2">
          <div
            onClick={() => setAdd(!add)}
            className="button w-40 h-16 bg-gray-900 rounded-lg cursor-pointer select-none

    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1f2937,0_0px_0_0_#6b7280]

    active:border-b-[0px]

    transition-all duration-100 [box-shadow:0_10px_0_0_#1f2937,0_15px_0_0_#6b7280]

    border-b-[1px] border-gray-400

  "
          >
            <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
              {!add ? "Add Flights" : "View All Flights"}
            </span>
          </div>
        </div>

        <div className="p-2 w-screen justify-center align-center">
          {/* TABLE HERE */}

          {add ? (
            <AddFlight
              airPorts={airPorts}
              insertFlightData={insertFlightData}
            />
          ) : (
            <FlightTable
              clear={() => setClear(!clear)}
              searchFlight={adminSearch}
              airPorts={airPorts}
              flights={flights}
              updateFlightData={updateFlightData}
              toggleFlightStatus={toggleFlightStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightManagement;
