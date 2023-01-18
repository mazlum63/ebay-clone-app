import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
    name: 'carouselSlice',
    initialState: {
        carouselPosition: 0,
        carouselTransform: 'translateX(0%)',
        carouselTransition: 'all 0.3s linear 0s'
    },
    reducers: {
        nextBtn: (state) => {
            if (state.carouselPosition >= 3) return
            state.carouselPosition += 1
            state.carouselTransform = `translateX(-${state.carouselPosition}00%)`
            state.carouselTransition = 'all 0.3s linear 0s'
        },
        prevBtn: (state) => {
            if (state.carouselPosition <= -1) return
            state.carouselPosition -= 1
            state.carouselTransform = `translateX(${state.carouselPosition * -1}00%)`
            state.carouselTransition = 'all 0.3s linear 0s'
        },
        carouselTransHandle: (state) => {
            if (state.carouselTransform === `translateX(${-300}%)`) {
                state.carouselPosition = 0
                state.carouselTransform = `translateX(${0}%)`
                state.carouselTransition = 'none'
            };
            if (state.carouselTransform == `translateX(${100}%)`) {
                state.carouselPosition = 2
                state.carouselTransform = `translateX(${-200}%)`
                state.carouselTransition = 'none'
            }
        }
    }
})


export const { nextBtn, prevBtn, carouselTransHandle } = carouselSlice.actions

export default carouselSlice.reducer