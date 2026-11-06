import Swal from "sweetalert2";

interface ColorListProps {
    colorsList: string[],
    handleClickClearColors: () => void,
}

const ColorList = ({colorsList, handleClickClearColors}: ColorListProps) => {

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

    return <> 
                { ColorList.length > 0 && ( <button className="btn btn-danger my-4 w-100" onClick={handleClickClearColors}>Clear</button> ) }
                <div className="list-group text-center">
                    { colorsList.length > 0 ? 
                    ( 
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
            </>
};

export default ColorList;
