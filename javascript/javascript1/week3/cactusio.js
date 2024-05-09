const activityTracker = {
  activities: [],
  timeOfActivities: 0,
  mostUse: 0,
  userLimit: 200,

  addActivity(activity, duration) {
    const today = new Date();
    const parisDate = new Intl.DateTimeFormat("en-UK", {
      timeZone: "Europe/Paris",
    }).format(today);

    const obj = { date: parisDate, activity, duration };
    this.activities.push(obj);
  },

  showStatus() {
    let mostUsedApp = "";
    const numberOfActivities = this.activities.length;
    this.timeOfActivities = 0;

    if (numberOfActivities === 0) {
      console.log(
        "Please enter some activities before calling showStatus function"
      );
      return;
    }

    for (let i = 0; i < numberOfActivities; i++) {
      this.timeOfActivities += this.activities[i].duration;
      if (this.activities[i].duration > this.mostUse) {
        this.mostUse = this.activities[i].duration;
        mostUsedApp = this.activities[i].activity;
      }
    }

    if (this.timeOfActivities > this.userLimit) {
      console.log("You have exceeded the limit. Please try again later");
    } else {
      console.log(
        `You have added ${numberOfActivities} activities. They amount to ${this.timeOfActivities} min of usage. Most used app: ${mostUsedApp} with ${this.mostUse} min`
      );
    }
  },
};

activityTracker.addActivity("Youtube", 30);
activityTracker.addActivity("Instagram", 45);
activityTracker.addActivity("Gaming", 60);

console.log(activityTracker.activities);
activityTracker.showStatus();
