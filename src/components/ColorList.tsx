import Swal from "sweetalert2";

interface ColorListProps {
    colorsList: string[],
}

const ColorList = ({colorsList}: ColorListProps) => {

    const handleCopyColor = (color: string) => {
        navigator.clipboard.writeText(color);
        Swal.fire({
            position: "top",
            icon: "success",
            title: `Color: ${color} copiado`,
            showConfirmButton: false,
            timer: 1300,
            timerProgressBar: true,
        });
    }

    return <div className="list-group text-center">
        { colorsList.length > 0 ? (
            colorsList.map((color, index) => (
                <button 
                    key={index}
                    type="button"
                    className="list-group-item list-group-item-action text-primary"
                    aria-current="true"
                    title="Copiar"
                    style={{ 
                        background: color
                    }}
                    onClick={() => handleCopyColor(color)}
                >
                    {color}
                </button>
            ))
        ) : (
            <div className="alert alert-danger" role="alert">
                <b>Sin elementos</b>
            </div>
        )}

    </div>
};

export default ColorList;
