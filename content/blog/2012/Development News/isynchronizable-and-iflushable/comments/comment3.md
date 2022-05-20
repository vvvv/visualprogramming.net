---
user: "Elias"
created: "1343473995"
---

i guess you do not want to block the main thread as long as the task is running?
in that case use a [ConcurrentQueue](http://msdn.microsoft.com/en-us/library/dd267265.aspx) where you enqueue your results from your tasks and try to dequeue them from the main thread.

something like this should work...

```
private readonly ConcurrentQueue<T> FResultQueue = new ConcurrentQueue<T>();
...
public void Evaluate(int spreadMax) {
  if (FEnabled<0)> {
    Parallel.Invoke(() => FResultQueue.Enqueue(default(T));
  }
  T result;
  if (FResultQueue.TryDequeue(out result)) {
    FOutput<0> = result;
  }
}
```
