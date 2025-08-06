export const formatDate = (dateString) => {
  if (!dateString) return ""
  const date = new Date(dateString)
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export const formatDateForInput = (dateString) => {
  if (!dateString) return ""
  const date = new Date(dateString)
  return date.toISOString().split("T")[0]
}
