function FormBarProgress({ size }: { size: number }) {
    return (
        <div className="flex items-center justify-center">
            <div className=" bg-zinc-700 w-full rounded-3xl overflow-hidden">
                <div className={`p-2 bg-blue-500 w-[${size}%]`}>

                </div>
            </div>
        </div>
    )
}

export default FormBarProgress;