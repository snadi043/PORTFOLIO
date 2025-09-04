// import { useState, useRef } from 'react';
// import Button from '../Button';
// import Overlay from 'react-bootstrap/Overlay';
// import NavCanvasControl from '../NavCanvasControl';

// function Example() {
//   const [show, setShow] = useState(false);
//   const target = useRef(null);

//   return (
//     <>
//       <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
//         Click me to see
//       </Button>
//       <Overlay target={target.current} show={show} placement="right">
//         {({
//           placement: _placement,
//           arrowProps: _arrowProps,
//           show: _show,
//           popper: _popper,
//           hasDoneInitialMeasure: _hasDoneInitialMeasure,
//           ...props
//         }) => (
//           <div
//             {...props}
//             style={{
//               position: 'absolute',
//               backgroundColor: 'rgba(255, 100, 100, 0.85)',
//               padding: '2px 10px',
//               color: 'white',
//               borderRadius: 3,
//               ...props.style,
//             }}
//           >
//             <NavCanvasControl/>
//           </div>
//         )}
//       </Overlay>
//     </>
//   );
// }

// export default Example;