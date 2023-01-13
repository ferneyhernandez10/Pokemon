import { Box, ImageList, ImageListItem, Modal } from "@mui/material";

export const ImageModal = ({ dataPokemon, open, handleClose }) => {
  const { back_default, back_shiny, front_default, front_shiny } =
    Object.keys(dataPokemon).length > 0 && dataPokemon?.sprites;

  const spriteImages = [front_default, front_shiny, back_default, back_shiny];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
        }}
      >
        <ImageList cols={2} rowHeight={160}>
          {spriteImages.map((images, index) => (
            <ImageListItem key={index}>
              <img src={images} alt="spriteImages" loading="Loading" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Modal>
  );
};
