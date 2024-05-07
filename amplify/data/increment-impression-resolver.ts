// lambda handler for incrementing impression

export const handler = async (event: any) => {
  return {
    videoId: event.arguments.videoId,
    impressions: event.arguments.count,
  };
};
