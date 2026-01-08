import HomeLayout from "../../layout/HomeLayout";

function StudentHome() {
    return (
        <HomeLayout color="ff6a00" sidebarOptions={
            [
                {
                    optionDisplay: 'sa',
                    reactNode: <div></div>
                }
            ]
        }>
            teste
        </HomeLayout>
    )
}

export default StudentHome;