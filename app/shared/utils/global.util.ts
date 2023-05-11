export function closeModal(id: string) {
    const targetModal = document.querySelector(id);
    //@ts-ignore
    const modal = bootstrap.Modal.getInstance(targetModal);
    if (modal) modal.hide();
}