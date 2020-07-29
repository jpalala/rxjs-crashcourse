<script>
import { fromEvent } from 'rxjs'; 

const button = document.getElementById('hello');

const observable = fromEvent(button, 'click');
</script>
