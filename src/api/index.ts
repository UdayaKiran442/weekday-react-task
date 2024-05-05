export const fetchJobsApi = async () => {
  // defining headers
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // defining body
  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  // api configuration options
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  // calling the api
  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );
  return response.json();
};
