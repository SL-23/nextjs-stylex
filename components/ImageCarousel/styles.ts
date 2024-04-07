import stylex from "@stylexjs/stylex"
export const styles = stylex.create({
  carouselRoot: {
   position: "relative",
  width: 400,
  height: 300,
  },

  ulContainer: {
    overflow: "auto",
    display: "flex",
    scrollSnapType: "x mandatory",
    
  },
  liContainer: {
    scrollSnapAlign: "start",
    scrollSnapStop: "always",
    listStyle: "none"
  },
 
  hiddenImg: {
    width: 400,
    height: 300,
    opacity: 0,
    display: "none"
  },
  img: {
    width: 400,
    height: 300,
  }
})