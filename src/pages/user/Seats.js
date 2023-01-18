import React, { useEffect, useState } from "react";
import axios from "axios"

const Seats = () => {
    const colOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const coltwo = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,];
    const colThree = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,]
    const colFour = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,];
    const colFive = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
    const colSix = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]


    const [booked, setBooked] = useState([]);
    const numberOfPassenger = 3
    const seatarr = []
    var bgcolor = ''
    // const pick = (p) => {
    //     console.log(p)
    //     seatarr.push(p)
    //     document.getElementById(p).style.backgroundColor = 'blue'
    //     console.log(document.getElementById(p))

    // }




    const seatHandler = (p) => {
        console.log(p)
        if (seatarr.length <= numberOfPassenger) {

            if (seatarr.length < numberOfPassenger && !booked.includes(p) && !seatarr.includes(p)) {
                seatarr.push(p)
                document.getElementById(p).style.backgroundColor = "#55c66e"
            }
            else if (seatarr.includes(p)) {
                document.getElementById(p).style.backgroundColor = ""
                seatarr.splice(seatarr.indexOf(p), 1)
            }
        }
        console.log(seatarr)
    }

    useEffect(() => {
        axios.get("http://LIN59017635.corp.capgemini.com:8082/booking/getBookedSeats/1/2023-01-11").then(res => {
            setBooked(res.data)
            console.log(booked)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    console.log(booked);
    return (
        <div className="">
            {/* <div class="rotated-half-circle"></div> */}

            <div className="SeatsMain">
                <div className="colOne absolute">
                    {
                        colOne.map(p => {
                            return (
                                <div class="ml-0 mt-4 seat ">
                                    <div className="seats" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "#ff7272" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" /><h6>{p}</h6>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="colTwo absolute">
                    {
                        coltwo.map(p => {
                            return (
                                <div class="ml-0 mt-4 seat ">
                                    <div className="seats" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "#ff7272" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" /><h6>{p}</h6>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="colThree absolute">
                    {
                        colThree.map(p => {
                            return (
                                <div class="ml-0 mt-4 seat ">
                                    <div className="seats" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "#ff7272" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" /><h6>{p}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="colFour absolute">
                    {
                        colFour.map(p => {
                            return (
                                <div class="ml-0 mt-4 seat ">
                                    <div className="seats" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "#ff7272" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" /><h6>{p}</h6>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="colFive absolute">
                    {
                        colFive.map(p => {
                            return (
                                <div class="ml-0 mt-4 seat ">
                                    <div className="seats" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "#ff7272" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" /><h6>{p}</h6>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="colSix absolute">
                    {
                        colSix.map(p => {
                            return (
                                <div class="ml-0 mt-4 seat ">
                                    <div className="seats" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "#ff7272" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" /><h6>{p}</h6>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Seats;