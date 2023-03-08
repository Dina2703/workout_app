import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-media-downloader.p.rapidapi.com";

      // fetch exercise data by its id.
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetail;
