export const fileUpload = async (file) => {
  if (!file) throw new Error('No hay ningún archivo para subir')

  const cloudName = import.meta.env.VITE_CLOUD_NAME
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET
  const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', uploadPreset)

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    })

    if (!resp.ok) throw new Error('No se pudo subir imagen')
    const cloudResp = await resp.json()

    return cloudResp.secure_url
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}
