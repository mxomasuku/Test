const VendingForm = () => {
    return(
        <div>
    <form action="" method="POST">
<input type="number" placeholder="0.00" step="0.10" min="0.10" title="currency" pattern="^\d+(?:\.\d{1,2})?$"></input>
<input type="submit" value="submit"></input>
</form>
        </div>
    
    )
}
export default VendingForm