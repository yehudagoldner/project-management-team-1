export default (element) => (
  <div key={element.id}>
    <Card className="board-card-task">
      <CardContent>
        <Typography variant="h5" component="div">
          {element.name}
        </Typography>
      </CardContent>
    </Card>
  </div>
);
