export const ImageGenerator = (props) => {
  // S'il n'y a pas d'image, affiche une erreur
  if (!props.image) {
    return <p>Sélectionner une image</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        padding: `${props.settings.padding}px`,
      }}
    >
      <img
        src={props.image.src}
        style={{
          // Ajoute le border-radius et le boxShadow
          boxShadow: `0 0 ${props.settings.shadow}px rgba(0,0,0,.${props.settings.shadow})`,
          borderRadius: `${props.settings.radius}px`,
          display: "flex",
        }}
      />
    </div>
  );
};
