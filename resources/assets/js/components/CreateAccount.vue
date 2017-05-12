<template>
	<div class="simple-root">
		<div class="form-group">
			<label class="col-md-3 control-label text-right">Email</label>
			<div class="col-md-9">
				<input type="text" name="email" v-validate.initial="'required|email'" :class="{'form-control': true, 'is-danger': errors.has('email') }" placeholder="Email" />
				<div v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</div>
			</div>
		</div>
	</div>
</template>